import { ClassesByTime } from "../types/Classes";

export const getMockClasses = (): ClassesByTime => {
    return {
        "9.00": [
            {
                class: "CS101",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS102",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS103",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS104",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS105",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "10.00": [
            {
                class: "CS106",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS107",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS108",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS109",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS110",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "11.00": [
            {
                class: "CS111",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS112",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS113",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS114",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS115",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "12.00": [
            {
                class: "CS116",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS117",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS118",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS119",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS120",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "13.00": [
            {
                class: "CS121",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS122",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS123",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS124",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS125",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "14.00": [
            {
                class: "CS126",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS127",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS128",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS129",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS130",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "15.00": [
            {
                class: "CS131",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS132",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS133",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS134",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS135",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "16.00": [
            {
                class: "CS136",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS137",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS138",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS139",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS140",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "17.00": [
            {
                class: "CS141",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS142",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS143",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS144",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS145",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "18.00": [
            {
                class: "CS146",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS147",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS148",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS149",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS150",
                room: "JH5",
                color: "lightyellow"
            }
        ]
    };
};

export const getMockClassesWithGaps = (): ClassesByTime => {
    return {
        "9.00": [
            {
                class: "CS101",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS102",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS103",
                room: "JH3",
                color: "pink"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            }
        ],
        "10.00": [
            {
                class: "CS106",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS107",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "CS109",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS110",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "11.00": [
            {
                class: "CS111",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "CS113",
                room: "JH3",
                color: "pink"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "CS115",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "12.00": [
            {
                class: "CS116",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS117",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "CS119",
                room: "JH4",
                color: "orange"
            },
            {
                class: "",
                room: "",
                color: ""
            }
        ],
        "13.00": [
            {
                class: "CS121",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "CS124",
                room: "JH4",
                color: "orange"
            },
            {
                class: "CS125",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "14.00": [
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "CS128",
                room: "JH3",
                color: "pink"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            }
        ],
        "15.00": [
            {
                class: "CS131",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS132",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS133",
                room: "JH3",
                color: "pink"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "CS135",
                room: "JH5",
                color: "lightyellow"
            }
        ],
        "16.00": [
            {
                class: "CS136",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS137",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            }
        ],
        "17.00": [
            {
                class: "CS141",
                room: "JH1",
                color: "lightgreen"
            },
            {
                class: "CS142",
                room: "JH2",
                color: "lightblue"
            },
            {
                class: "CS143",
                room: "JH3",
                color: "pink"
            },
            {
                class: "CS144",
                room: "JH4",
                color: "orange"
            },
            {
                class: "",
                room: "",
                color: ""
            }
        ],
        "18.00": [
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            },
            {
                class: "",
                room: "",
                color: ""
            }
        ]
    };
};
