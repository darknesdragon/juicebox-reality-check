import {forwardRef, useImperativeHandle, useRef} from 'react';

import '@styles/components/_step-3-form.scss';

type formTextEl = {
    formTextEl: HTMLDivElement | null;
}

type formTextProps = {
    text: string;
}

const Step3orm = forwardRef<formTextEl, formTextProps>(({text}, ref) => {

    const formTextEl = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        formTextEl: formTextEl.current,
    }));

    return (
        <div className="brand-form container" ref={formTextEl}>
            <p className="brand-form__text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
});

Step3orm.displayName = 'Step3orm';

export default Step3orm;
