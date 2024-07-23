export {}

declare global {
    enum Unit {
        ch = 'ch',
        px = 'px',
        vh = 'vh',
        vw = 'vw',
        em = 'em',
        rem = 'rem',
        vmin = 'vmin',
        vmax = 'vmax',
        percent = '%'
    }

    type UnitValue = `${number}${Unit}`
}
