// Libraries
import React from 'react'
// Components
import { GoogleMap, LoadScript } from '@react-google-maps/api'
// Assets
import * as styles from './MapContainer.module.scss'
// Data
const googleMapsApiKey = process.env.GATSBY_GOOGLE_MAPS_KEY

export default function MapContainer() {
  const mapStyles = {
    height: '25rem',
    width: '100%',
  }

  const defaultCenter = {
    lat: 45.01284042491906,
    lng: -78.75795963863432,
  }

  return (
    <div className={styles.container}>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  )
}
