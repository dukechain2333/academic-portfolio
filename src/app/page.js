import React from "react";

import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Content from "@/app/components/Content";

config.autoAddCss = false

export default function Home() {
    return (
        <Content></Content>
    );
}
