import React from "react";
import styles from "../styles/hoge.module.css"
import Link from "next/link"

const StyledHeader = ({children}) => {
    return (
        <div>
            <h1>{children}</h1>
            <style jsx>
                {`h1 {
                  color: red;
                }`}
            </style>
        </div>
    )
};

export default () => {



    return (
        <div>
            <StyledHeader>hogehoge</StyledHeader>
            <h1 className={styles.greenColor}>hogehoge</h1>
            <Link href={"/"}>
                <a>waaaaaaaaaaaaaaaaaaaa</a>
            </Link>
        </div>)
}
