import React, { createRef, useEffect } from 'react';
import { ExcludeInputTypes } from './constants/excludeInputTypes';
import './styles/form.css';
import { Fields, FormProps, ReturnFormData } from './types/index';
import Warn from './utils/warn';

const Form = ({ name, handleSubmit, children }: FormProps): JSX.Element => {

    const formRef: React.RefObject<HTMLFormElement> = createRef<HTMLFormElement>();
    let fields: Fields = [];

    useEffect(() => {
        if (formRef.current) {
            const { elements } = formRef.current;

            if (!elements.length) {
                Warn('[Form] Provide atleast one input type text and one input type submit.');
                return;
            }

            const elementsArray: Array<Element> = Array.from(elements);

            let elementType;

            fields = elementsArray.filter((elem) => {
                elementType = elem.getAttribute('type') as string;
                return elem instanceof HTMLInputElement && !ExcludeInputTypes.includes(elementType)
            });

            if (!fields.length) {
                Warn('[Form] Provide atleast one input type text.');
            }
        }
    }, [fields]);

    const handleSubmitForm = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        const data: ReturnFormData = fields.map((field: Element) => {
            const { name, value } = field as HTMLInputElement;
            if (!name) {
                Warn(`[Form] Input with "${value}" does not have a name.`);
            }
            return {
                name,
                value
            }
        })

        return handleSubmit(data);
    }

    return (
        <form name={name} ref={formRef} onSubmit={handleSubmitForm}>
            {children}
        </form>
    )
}

export default Form;