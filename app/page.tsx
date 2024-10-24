import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
         <Title text="All pizzas" size="lg" className="font-extrabold" /> 
      </Container>
       <TopBar /> 

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          
          <div className="w-[250px]">
            <Filters />
          </div>

          
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Combos"
                items={[
                  {
                    id: 1,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Cheeseburger-pizza',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11EE87499F9A4542A46933A1B5FD8A0F.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
