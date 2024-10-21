import {
  Filters,
  Container,
  Title,
  TopBar,
  ProductCard,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/*Filter*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Products list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={0}
                name="Cheeseburger-pizza"
                price={0}
                imageUrl="https://media.dodostatic.com/image/r:292x292/11EF16A483ADD64E91433787A0041619.avif"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
