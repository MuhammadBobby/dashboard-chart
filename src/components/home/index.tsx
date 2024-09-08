import ButtonMenu from "./button-menu";

const menu: { name: string; href: string; bgColor: string }[] = [
  {
    name: "Distribusi Divisi",
    href: "/distribusi-divisi",
    bgColor: "bg-emerald-800",
  },
  {
    name: "Rasio Gender Karyawan",
    href: "/rasio-gender-karyawan",
    bgColor: "bg-red-800",
  },
  {
    name: "Performa Karyawan (KPI)",
    href: "/performa-karyawan",
    bgColor: "bg-blue-800",
  },
];

export default function HomeComponent() {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">Selamat Datang di Dashboard Chart</h1>
      <p className="text-lg md:mt-3">Silahkan pilih menu :</p>

      <div className="flex flex-wrap gap-2 items-center justify-center mt-5 mx-3 md:mx-16">
        {menu.map((item) => (
          <ButtonMenu key={item.name} href={item.href} bgColor={item.bgColor}>
            {item.name}
          </ButtonMenu>
        ))}
      </div>
    </>
  );
}
