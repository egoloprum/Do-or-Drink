import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center z-10">
      <div className="border-2 border-border_color p-4 max-w-[35rem] w-full flex flex-col gap-4 z-10 rounded-xl m-4">

        <div className="text-center">
          <p className="text-4xl">Do or Drink</p>
        </div>

        <Card />

      </div>
    </div>
  );
}
