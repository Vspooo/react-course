import React, {FC} from 'react';
import styles from './Reciept.module.css'

interface IRecieptProps{
    title : string;
    desc: string;
    // children?: React.ReactNode
}

type ITypeProps = IRecieptProps & {children?: React.ReactNode};

const Reciept:FC<ITypeProps> = (props) => {
    let {title,desc,children} = props;



    return (
        <div className={styles.receipt}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>{children}</p>
        </div>
    );
};

export default Reciept;