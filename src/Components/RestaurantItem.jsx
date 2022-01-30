export default function RestaurantItem({ restaurant }) {
  return (
    <div>
      {restaurant.name}
      |
      {restaurant.address}
    </div>
  );
}
