export default function ItemPage({ params }: { params: { itemId: string } }) {
  return <div>Item ID: {params.itemId}</div>;
}
