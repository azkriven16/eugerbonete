import { ImageResponse } from "next/og";

export async function GET(request: Request) {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 60,
                    color: "white",
                    background: "black",
                    width: "100%",
                    height: "100%",
                    padding: "30px 60px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ fontSize: 32, marginBottom: 10 }}>
                    HEY! I&apos;M EUGER, A SOFTWARE DEVELOPER.
                </div>
                <img
                    width="200"
                    height="200"
                    src={`https://github.com/htxmlx.png`}
                    style={{
                        borderRadius: 100,
                    }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                fontSize: 60,
                            }}
                        >
                            Crafting 🔨 websites 🌐 with
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                fontSize: 60,
                            }}
                        >
                            precision 📐, one &lt;div&gt; at a time ⌚.
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 24,
                        marginTop: 20,
                        opacity: 0.8,
                        textAlign: "center",
                    }}
                >
                    Worked with 2 companies, 1+ year of experience working with
                    React, Next.js, and TypeScript. Currently a student,
                    graduating in 2025, while working a part-time dev.
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
