export const load = async (serverLoad) =>{
    let {fetch,locals} = serverLoad
    let { traductions = {} } = locals
    return traductions
}