import { resolve } from "styled-jsx/css";

export default async function Wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}