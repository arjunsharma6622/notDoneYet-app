import { API_HEAD } from '@/utils/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import VenueCard from './VenueCard';

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchVenues = async () => {
    try {
      setIsFetching(true)
      const response = await axios.get(`${API_HEAD}/venue/`);
      setVenues(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    } finally {
      setIsFetching(false)
    }
  };
  useEffect(() => {
    fetchVenues();
  }, []);

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={fetchVenues} />
        }
        showsVerticalScrollIndicator={false}
        className='h-full'
      >
        {venues?.map((venue: any) => (
          <VenueCard key={venue._id} venue={venue} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Venues