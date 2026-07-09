import { members } from "@/data/members";
import Image from "next/image";

export default function FellowshipSection() {
    return (
        <section className="fellowship">
            <div className="fellowship__header">
                <div className="section-mark" />
                <p className="fellowship__eyebrow">The Road Is Better Together</p>
                <h2 className="fellowship__title">Meet the travelers.</h2>
            </div>

            <div className="fellowship__grid">
                {members.map((member) => (
                    <article className="fellowship__card" key={member.name}>
                        <div className="fellowship__imageWrap">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={600}
                                height={750}
                                className="fellowship__portrait"
                            />

                            <div className="fellowship__overlay">
                                <div className="fellowship__overlayContent">
                                    <p className="fellowship__instrument">
                                        {member.role}
                                    </p>

                                    <p className="fellowship__line">
                                        {member.line}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3>{member.name}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}