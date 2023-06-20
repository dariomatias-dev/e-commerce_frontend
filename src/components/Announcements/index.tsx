import Image from "next/image";

const Announcements = () => {
    return (
        <section>
            <Image
                src={"https://live.staticflickr.com/65535/52989343725_5b29729e39_h.jpg"}
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
