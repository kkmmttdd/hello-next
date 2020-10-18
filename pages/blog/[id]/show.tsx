import {useRouter} from "next/router";
import React from "react";


export default () => {
    const router = useRouter();
    return (
        <div>
            <h1>ID: {router.query.id}</h1>
        </div>)
}
