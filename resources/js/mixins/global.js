const getLiteralStatus = {
    methods: {
        getLiteralStatus(status){
            if(status === 0)
                return 'Inativo';
            return 'Ativo';
        }
    }
};

export {
    getLiteralStatus
}
