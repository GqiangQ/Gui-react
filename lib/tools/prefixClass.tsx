export default (prefix:string) => {
    prefix = 'gui-'+prefix
    return (name:string) => {
        return [prefix, name].filter(Boolean).join('-')
    }
}