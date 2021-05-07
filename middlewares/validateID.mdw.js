exports._idExists = (async (id ) => {
    const idExists = await User.findById(id);

    if (!idExists) {
        throw new Error( `El Id: ${id} no existe`);
    }
});
