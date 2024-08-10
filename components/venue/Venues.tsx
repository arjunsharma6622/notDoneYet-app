import { API_HEAD } from '@/utils/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import VenueCard from './VenueCard';

const Venues = () => {
    const [venues, setVenues] = useState([]);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`${API_HEAD}/venue/`);
                setVenues(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        fetchDoctors();
    }, []);

  return (
    <View>
      <ScrollView>
        {venues?.map((venue: any) => (
            <VenueCard key={venue._id} venue={venue}/>
        ))}
      </ScrollView>
    </View>
  )
}

export default Venues