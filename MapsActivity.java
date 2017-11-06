

// Add package

public class MapActivity extends FragmentActivity
{

private GoogleMap mMap;

@Override
protected void onCreate(Bundle savedInstanceState)
{
super.onCreate(savedInstanceState);
setContentView(R.layout.activity_maps);
setMapIfNeeded();
}

@Override
protected void onResume()
{
super.onResume();
setMapIfNeeded();
}



private void setMapIfNeeded()
{
  if (mMap==null)
{
mMap=((SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map)).getMap();
 if (mMap!= null) 
{
setUpMap();
}
}
}
   private void setUpMap()

{
mMap.addMarker(new MarkerOptions().position(new LatLng(0,0)).title("Marker"));
mMap.setMyLocationEnabled(true);     //needed for current GPS location
}
}

}
