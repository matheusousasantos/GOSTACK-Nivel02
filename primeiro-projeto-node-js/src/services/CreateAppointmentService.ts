import Appointment from '../models/Appointment';

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public execute({ provider, date } :RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    throw Error('This appointment is already booked');
  }

  const appointment = appointmentsRepository.create({
    date: appointmentDate,
    provider,
  });

  return Appointment;

  }
}

export default CreateAppointmentService;

/*
return response
      .status(400)
      .json({ message: });

*/
