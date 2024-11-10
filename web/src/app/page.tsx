'use client';
import { useCallback } from 'react';
import { getRooms } from './getRooms';

export default function HomePage() {
  const onCreateRoomClick = useCallback(async () => {
    const response = await getRooms();
    console.debug(response);
  }, []);

  return <button onClick={onCreateRoomClick}>Utwórz Pokój</button>;
}
