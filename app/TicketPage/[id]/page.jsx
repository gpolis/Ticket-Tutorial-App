"use client"

import React, { useState, useEffect } from 'react';
import EditTicketForm from "@/app/(components)/EditTicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch ticket");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = ({ params }) => {
  const [updateTicketData, setUpdateTicketData] = useState({
    _id: "new",
  });

  useEffect(() => {
    const fetchData = async (id) => {
      const EDITMODE = id === "new" ? false : true;

      if (EDITMODE) {
        try {
          const ticketData = await getTicketById(params.id);
          setUpdateTicketData(ticketData.foundTicket); // Use `ticketData` directly as `foundTicket` may not be necessary
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchData(params.id);
  }, [params]);

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
