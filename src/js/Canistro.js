import { AuthClient } from "@dfinity/auth-client";
import { Actor } from "@dfinity/agent";
import { IDL } from "@dfinity/candid";
import eventify from "Medusa/Event.js";
import { SVG } from "Medusa/Parseltongue/SVG/SVG.js";
import { Canister } from "./Canister/Canister.js";
// import {Worker} from './Pointer/pointer.js?worker'
import { Pin } from "./Pointer/Pin/Pin.js";
import { Pointer } from "./Pointer/Pointer.js";
const days = BigInt(1); // One day in nanoseconds
const hours = BigInt(24);
const nanoseconds = BigInt(3600000000000);
export class Canistro/*  extends HTMLElement  */{
	static options = { 	create: { idleOptions: { disableIdle: true /* Set to true if you do not want idle functionality */ , }, },
						login : { identityProvider: process.env.DFX_NETWORK === "ic" ? "https://identity.ic0.app/#authorize" : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943/`, maxTimeToLive: days * hours * nanoseconds /* Maximum authorization expiration is 8 days */ , } , };

	constructor(terminal) {
		// super();
		this.terminal = terminal
        eventify(this)
		// this.shadow_root = this.attachShadow({mode: 'open'});
		this.status = '';
		this.progress = 0;
		this.setup_pulse();
		// this.redraw()
		this.canisters = {} 
		this.modules = {} 
		this.actors = {} 
		this.connectors = []
		this.load_canisters()
		this.load_modules()
	}

	async load_canisters(){
		for (const key in process.env){ 
			if(key.startsWith("CANISTER_ID_")){
				const cid = process.env[key]
				if (cid !== process.env.CANISTER_ID){
					const ckey = key.replace("CANISTER_ID_",'').toLowerCase()
					this.canisters[ckey] = [cid]  } } } }

	build_canisters(){
		let [counter, count] = [0, Object.keys(this.canisters).length]
		for (const canister_name in this.canisters){ 
			const canister  = new Canister(this, canister_name)
			var v3 = new THREE.Vector3(1000, 0, 0 );
			var axis = new THREE.Vector3( 0, 0, 1 );
			var deg = 360/count*counter;
			var angle = deg * (Math.PI / 180);
			v3.applyAxisAngle( axis, angle );
			canister.display(180, v3.x, v3.y)
			this.canisters[canister_name].push(canister)
			counter++
		}
	}
	async load_modules(){
		window.IDL = IDL
		for (const canister_name in this.canisters){ 
			try { // const module = await import(`/${"Canistro/Declarations"}/${canister_name}`/* @vite-ignore */)
				const module = await import(`/${"Canistro/Declarations"}/${canister_name}`/* @vite-ignore */)
				this.modules[canister_name] = module } 
			catch (error) { console.info(`NO CANDID for ${canister_name}`)} }
		this.build_canisters()
	} 
	
	async client(){
		this.auth_client = this.auth_client || await AuthClient.create(Canistro.options.create)
		return this.auth_client
	}

	async actor(caller_ident, canister_name){
		if (canister_name in this.actors){ 
			let [actor_ident, actor] = this.actors[canister_name]
			if (!caller_ident || actor_ident.toString() === caller_ident.toString()){ return actor }}
		const { canisterId, createActor} = this.modules[canister_name]//await import(`/${"Canistro/Declarations"}/${canister_name}`/* @vite-ignore */)
		const client = await this.client()
		const identity = await client.getIdentity()
		// const authenticated = await client.isAuthenticated()
		const actor = createActor(canisterId, { agentOptions: { identity, }, })
		this.actors[canister_name] = [identity, actor];
		return actor
	} 

	async login(){
		let that = this;
		const client = await this.client()
		client.login({ ...Canistro.options.login,
			onSuccess: async () => { 
				console.log("Login Successful")
				handleAuthenticated(client);
				// that.fire('login', 0, 	 that);
				client.idleManager?.registerCallback(() => { // Invalidate identity then render login when user goes idle
					for (const actor_name in that.actors){ 
						const actor =  that.actors[actor_name]
						console.log(`invalidating canister ${actor_name}!`)
						Actor.agentOf(actor)?.invalidateIdentity?.(); }}); },
			onError  : async () => { 
				console.log("Login Error")
				that.fire('login', 255, that); }, 
		})
	}						

	async logout(){
		const client = await this.client()
		await client.logout();
	}
	async is_authenitcated(){
		const client = await this.client()
		return await client.isAuthenticated()
	}

	async identity(){
		const client = await this.client()
		return await client.getIdentity()
	}
			
	async call(canister_name, method){
		const actor = await this.actor(null ,canister_name)
		return await actor[method]();
		// index.js:155 AgentHTTPResponseError: Server returned an error:
		// Code: 400 (Bad Request)
		// Body: Specified sender delegation has expired:
	}

	async invalidate(caller_ident, canister_name){
		const canister_actor = await this.actor(caller_ident, canister_name)
		Actor.agentOf(canister_actor)?.invalidateIdentity?.();
	}
}

const renderLoggedIn = ( actor, authClient ) => {
	(document.getElementById("whoamiButton")).onclick =
		async () => {
			try {
				const response = await actor.whoami();
				(document.getElementById("whoami")).value = response.toString(); } 
			catch (error) { console.error(error); } };
	(document.getElementById("logout")).onclick =
		async () => {
			await authClient.logout();
			renderIndex(authClient); }; };

const renderIndex = async ( client, statusMessage ) => {
	const authClient = client ?? (await AuthClient.create(defaultOptions.createOptions));
	const loginButton = document.getElementById( "loginButton" );
	loginButton.onclick = () => {
		authClient.login({ ...defaultOptions.loginOptions,
			onSuccess: async () => { handleAuthenticated(authClient); }, }); }; };

async function handleAuthenticated(authClient) {
	const identity = (await authClient.getIdentity())
	const whoami_actor = createActor(canisterId, { agentOptions: { identity, }, });
	authClient.idleManager?.registerCallback(() => { // Invalidate identity then render login when user goes idle
		Actor.agentOf(whoami_actor)?.invalidateIdentity?.();
		renderIndex(authClient); });
	renderLoggedIn(whoami_actor, authClient); }

async function setupToast() {
	const status = document.getElementById("status");
	const closeButton = status?.querySelector("button");
	closeButton?.addEventListener("click", () => { status?.classList.add("hidden"); }); }

const init = async () => {
	const authClient = await AuthClient.create(defaultOptions.createOptions);
	if (await authClient.isAuthenticated()) { handleAuthenticated(authClient); }
	renderIndex();
	setupToast(); };

window.customElements.define('medusa-canistro', Canistro);