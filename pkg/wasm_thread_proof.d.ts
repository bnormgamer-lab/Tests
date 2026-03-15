/* tslint:disable */
/* eslint-disable */

export function main(): void;

/**
 * Spawn the Worker thread. Called from JS after init() completes,
 * so the main thread has returned to the event loop.
 */
export function start_worker(): void;

/**
 * Entry point for web workers
 */
export function wasm_thread_entry_point(ptr: number): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly main: () => void;
    readonly start_worker: () => void;
    readonly wasm_thread_entry_point: (a: number) => void;
    readonly wasm_bindgen_3ac8b3b327e70fd2___closure__destroy___dyn_core_bc5537fd95ebd38b___ops__function__Fn_____Output_______: (a: number, b: number) => void;
    readonly wasm_bindgen_3ac8b3b327e70fd2___closure__destroy___dyn_for__a__core_bc5537fd95ebd38b___ops__function__FnMut____a_web_sys_5dee1397b8b2d40a___features__gen_MessageEvent__MessageEvent____Output_______: (a: number, b: number) => void;
    readonly wasm_bindgen_3ac8b3b327e70fd2___convert__closures________invoke___web_sys_5dee1397b8b2d40a___features__gen_MessageEvent__MessageEvent______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_3ac8b3b327e70fd2___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly wasm_bindgen_3ac8b3b327e70fd2___convert__closures_____invoke_______true__1_: (a: number, b: number) => void;
    readonly memory: WebAssembly.Memory;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_thread_destroy: (a?: number, b?: number, c?: number) => void;
    readonly __wbindgen_start: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput, memory?: WebAssembly.Memory, thread_stack_size?: number }} module - Passing `SyncInitInput` directly is deprecated.
 * @param {WebAssembly.Memory} memory - Deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput, memory?: WebAssembly.Memory, thread_stack_size?: number } | SyncInitInput, memory?: WebAssembly.Memory): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput>, memory?: WebAssembly.Memory, thread_stack_size?: number }} module_or_path - Passing `InitInput` directly is deprecated.
 * @param {WebAssembly.Memory} memory - Deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput>, memory?: WebAssembly.Memory, thread_stack_size?: number } | InitInput | Promise<InitInput>, memory?: WebAssembly.Memory): Promise<InitOutput>;
