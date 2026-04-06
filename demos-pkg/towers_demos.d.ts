/* tslint:disable */
/* eslint-disable */

export class VisualPreview {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Get field definitions as JSON: [{"name":"charge","default":0.0}, ...]
     */
    get_fields_json(): string;
    /**
     * List all Visual IDs in RON text.
     */
    list_visuals(ron_text: string): string;
    /**
     * Create a new VisualPreview attached to a canvas element.
     */
    constructor(canvas: HTMLCanvasElement, _has_webgpu: boolean);
    /**
     * Pan the camera by a screen-space delta.
     */
    pan(dx: number, dy: number): void;
    /**
     * Render one frame using the real wgpu SDF pipeline.
     */
    render_frame(time_seconds: number): void;
    /**
     * Reset camera to default view.
     */
    reset_camera(): void;
    /**
     * Resize the rendering surface.
     */
    resize(width: number, height: number): void;
    /**
     * Set camera position and zoom.
     */
    set_camera(x: number, y: number, zoom: number): void;
    /**
     * Set a field value by index. Called by UI sliders.
     */
    set_field_value(index: number, value: number): void;
    /**
     * Re-compile from new RON text (last Visual).
     */
    update(ron_text: string): string;
    /**
     * Compile a specific Visual by ID.
     */
    update_by_id(ron_text: string, visual_id: string): string;
    /**
     * Zoom at a screen point.
     */
    zoom_at(factor: number, screen_x: number, screen_y: number): void;
}

export function iso_depth_key(world_x: number, world_y: number, rotation: number): number;

export function iso_screen_to_world(screen_x: number, screen_y: number, tile_w: number, tile_h: number, rotation: number): Float64Array;

export function iso_world_to_screen(world_x: number, world_y: number, tile_w: number, tile_h: number, rotation: number): Float32Array;

export function td_depth_key(world_x: number, world_y: number): number;

export function td_world_to_screen(world_x: number, world_y: number, unit_scale: number): Float32Array;

export function tick(timestamp_ms: number): void;

export function wasm_init(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_visualpreview_free: (a: number, b: number) => void;
    readonly iso_depth_key: (a: number, b: number, c: number) => number;
    readonly iso_screen_to_world: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly iso_world_to_screen: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly td_depth_key: (a: number, b: number) => number;
    readonly td_world_to_screen: (a: number, b: number, c: number, d: number) => void;
    readonly tick: (a: number) => void;
    readonly visualpreview_get_fields_json: (a: number, b: number) => void;
    readonly visualpreview_list_visuals: (a: number, b: number, c: number, d: number) => void;
    readonly visualpreview_new: (a: number, b: number) => number;
    readonly visualpreview_pan: (a: number, b: number, c: number) => void;
    readonly visualpreview_render_frame: (a: number, b: number) => void;
    readonly visualpreview_reset_camera: (a: number) => void;
    readonly visualpreview_resize: (a: number, b: number, c: number) => void;
    readonly visualpreview_set_camera: (a: number, b: number, c: number, d: number) => void;
    readonly visualpreview_set_field_value: (a: number, b: number, c: number) => void;
    readonly visualpreview_update: (a: number, b: number, c: number, d: number) => void;
    readonly visualpreview_update_by_id: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly visualpreview_zoom_at: (a: number, b: number, c: number, d: number) => void;
    readonly wasm_init: () => void;
    readonly __wasm_bindgen_func_elem_685: (a: number, b: number) => void;
    readonly __wasm_bindgen_func_elem_1762: (a: number, b: number) => void;
    readonly __wasm_bindgen_func_elem_1763: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_6209: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_686: (a: number, b: number, c: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number) => void;
    readonly __wbindgen_export4: (a: number, b: number, c: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
