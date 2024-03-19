import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
    input: 'import-me.js',
    output: [
        {
            dir: 'dist',
            format: 'esm',
            name: 'PetriNet',
        }
    ],
    plugins: [
        nodeResolve({ preferBuiltins: false }),
        nodePolyfills(), // one of the indirect dependencies somehow tries to read process.env.NODE_ENV
        // TODO: maybe we can just create an object process = { env: { NODE_ENV: 'prod'}} in index.js?
        commonjs(),
    ],
}
