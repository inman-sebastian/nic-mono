/** Add PostCSS file import compatibility */
declare module '*.postcss' {
    const content: string
    export default content
}
