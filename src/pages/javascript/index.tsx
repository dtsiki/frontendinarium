import { Header } from "@/components/section/Header";
import { TableOfContents } from "@/components/section/TableOfContents";
import { Content } from "@/components/section/Content";
import { VarLetConst } from "@/components/javascript/VarLetConst";

export default function JavaScript() {
    const content = [
        {
            label: "Что такое JavaScript?",
            link: "",
            content: ""
        },
        {
            label: "Типы данных в JavaScript",
            link: "",
            content: ""
        },
        {
            label: "typeof",
            link: "",
            content: ""
        },
        {
            label: "null vs undefined",
            link: "",
            content: ""
        },
        {
            label: "var, let, const",
            link: "",
            content: <VarLetConst />
        },
        {
            label: "Мутабельность и иммутабельность",
            link: "",
            content: ""
        },
        {
            label: "",
            link: "",
            content: ""
        },
    ];

    const title = "JavaScript";
    const description = `Этот раздел посвящён языку программирования JavaScript.
Ниже вы найдёте оглавление, по которому можно будет перейти быстро в нужный раздел.`;

    return (
        <div className="section">
            <Header title={title} description={description} />
            <TableOfContents items={content} />
            <Content items={content} />
        </div>
    );
}