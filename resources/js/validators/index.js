export const cpfOrCnpj = (value) => {
    return /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/.test(value);
};

export const date = (value) => {
    return /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)((19)[6-9][0-9])$/.test(value);
};

export const gender = (value) => {
    if(value){
        return /^(M|F)$/.test(value);
    }
    return true;
};

export const passwordRegex = value => {
    return /^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/.test(value);
};

export const checkType = value => {
    return /^[1-3]{1}$/.test(value);
};
