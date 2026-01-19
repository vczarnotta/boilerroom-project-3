function Sidebar () {

    return (
        <nav
            style=
            {{
                width: "240px",
                height: "100vh",
                backgroundColor: "lightgray",
                color: "white",
                padding: "1rem"
            }}
        >
            <h2>Navigation</h2>

            <ul
                style=
                {{
                    listStyle: "none",
                    padding: "0"
                }}
            >
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

        </nav>
    );
}

export default Sidebar;