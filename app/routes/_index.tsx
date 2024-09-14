import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Cat Adoption Platform" },
    { name: "description", content: "Adote gatinhos!" },
  ];
};

export default function Index() {
  return (
    <>
      <p>love cats</p>
      <p>still love cats</p>
    </>
  );
}
