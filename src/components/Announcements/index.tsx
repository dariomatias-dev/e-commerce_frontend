import Image from "next/image";

const Announcements = () => {
    return (
        <section>
            <Image
                src={
                    "https://raw.githubusercontent.com/dariomatias-dev/e-commerce_images/main/announcements/announcement.png"
                }
                width={2000}
                height={2000}
                priority={true}
                className="w-full h-auto object-contain"
                alt="Announcement"
            />
        </section>
    );
};

export default Announcements;
