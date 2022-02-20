import { useState } from "react";

const useForms= dadosIniciais => {
    const [form, setForm] = useState(dadosIniciais);

    const onChangeForm= event => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    const clear= () => {
        setForm(dadosIniciais);
    }

    return {form, onChangeForm, clear};
};

export default useForms;