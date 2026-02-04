import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CoverageMap = ({ districtsData }) => {
    console.log(districtsData)
    // Bangladesh center location
    const bangladeshCenter = [23.685, 90.3563];

    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <MapContainer
                center={bangladeshCenter}
                zoom={7}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                {/* Map tiles (real map view) */}
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* map with all distric*/}
                {
                    districtsData.map((item, index) => (
                        <Marker
                            key={index}
                            position={[item.latitude, item.longitude]}
                        >
                            <Popup>
                                <div className="text-sm">
                                    <h3 className="font-bold text-lg text-[#1f1f1f]">{item?.district}</h3>
                                    <p>Region: {item?.region}</p>
                                    <p>City: {item?.city}</p>
                                    <p>Status: {item?.status}</p>
                                    <p className="mt-1">
                                        Covered Areas:
                                        <br />
                                        {item?.covered_area?.join(", ")}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                }

            </MapContainer>
        </div>
    );
};

export default CoverageMap;








