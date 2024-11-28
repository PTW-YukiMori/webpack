import { CreateMaterialDesignButton } from "./module/CreateMaterialDesignButton.mjs";

const body = document.querySelector("body");

const button = CreateMaterialDesignButton('ボタン',() => console.log('hoge'));

body.appendChild(button);