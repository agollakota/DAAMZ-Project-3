package com.example.gpslocation;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.Menu;

public class GPS_Location extends Activity implements LocationListener {

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_gps__location);

    LocationManager locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
    locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, this);
}

@Override
public boolean onCreateOptionsMenu(Menu menu) {
    
    getMenuInflater().inflate(R.menu.gps__location, menu);
    return true;
}

@Override
public void onLocationChanged(Location location) {
     

    double latitude = (double) (location.getLatitude());
    double longitude = (double) (location.getLongitude());

    Log.i("Geo_Location", "Latitude: " + latitude + ", Longitude: " + longitude);
}

@Override
public void onProviderDisabled(String provider) {
   

}

@Override
public void onProviderEnabled(String provider) {
     
}

@Override
public void onStatusChanged(String provider, int status, Bundle extras) {
    

}

}