export interface IAppConfig {
    // The name of the app
    name: string;

    // The available times for the timetable.
    times: string[];

    // The available days for the timetable.
    workweek: string[];
}
