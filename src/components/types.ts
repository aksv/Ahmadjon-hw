export interface ITabs{
    title: string;
    id: string;
}

export interface IForm{
    isOpen: boolean;
    modalClose: () => void;
}
export interface IInput{
    value: string;
    placeholder: string;
    label: string;
    type: string;
    onchange: any;
    id: string;
    name: string;
    width: string;
    marginRight?: string;
}