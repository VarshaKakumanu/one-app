import React from "react"
import img1 from "@/public/next.svg"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const notifications = [
  {
    id: "1",
    image: "/mock/mock1.jpeg",
    place: "Place A",
    date: "February 22, 2024",
    distance: "5 miles",
    pincode: "394Ef",
  },
  {
    id: "2",
    image: "/path/to/image2.jpg",
    place: "Place B",
    date: "February 23, 2024",
    distance: "10 miles",
    pincode: "567Gh",
  },
  {
    id: "3",
    image: "/path/to/image3.jpg",
    place: "Place C",
    date: "February 24, 2024",
    distance: "8 miles",
    pincode: "123Ab",
  },
  {
    id: "4",
    image: img1,
    place: "Place A",
    date: "February 22, 2024",
    distance: "5 miles",
    pincode: "394Ef",
  },
  {
    id: "5",
    image: img1,
    place: "Place A",
    date: "February 22, 2024",
    distance: "5 miles",
    pincode: "394Ef",
  },
  {
    id: "6",
    image: img1,
    place: "Place A",
    date: "February 22, 2024",
    distance: "5 miles",
    pincode: "394Ef",
  },
]

const Grid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {notifications.map((notification) => (
        <Card key={notification.id} className={cn("w-[380px] ")}>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-auto">
              <img
                className="w-full rounded-2xl"
                src={notification.image}
                alt="Property"
                style={{ aspectRatio: "1 / 1" }}
              />
              <div className="grid grid-flow-col">
                <div>
                  <div>{notification.place}</div>
                  <div>{notification.date}</div>
                </div>
                <div>
                  <div>{notification.distance}</div>
                  <div>{notification.pincode}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Grid
