import { pets } from '../assets/data/data.js';

export default function ListPets({ value }) {
  const petList = pets.filter(
    (pet) => pet.animal.toLowerCase() === value.toLowerCase()
  );

  const rowItems = petList.map((pet) => (
    <tr key={pet.id}>
      <td className='text-center'>
        <img src={pet.imageUrl} />
      </td>
      <td className='text-start'>{pet.name}</td>
      <td className='text-start'>{pet.specialty}</td>
    </tr>
  ));
  return rowItems;
}
