import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type PartialCourse = {
  courseId: string
  classId: string
  name: string
  credits: number
  slots: number
  start: number
  period: number
  room: string
  dayOfWeek: number
  lecturer: string
}

export type CClass = Omit<PartialCourse, 'start'> & {
  row: number
}

export type TimetableGenerationResult = {
  totalCases: number
  validCases: number
  expectedCases: number
  timetables: PartialCourse[][][]
}

export type TimetableGenerationState = {
  numberOfCourses: number
  currentIndexes: number[]
  numberOfCourseInstances: number[]
}

export type Filter = {
  day: {
    numberOfRelaxationDays: number
    specificDays: number[]
  }
  lecturer: {
    expected: Record<string, string[]>
    unexpected: Record<string, string[]>
  }
}

export type FilterState = {
  specificDays: { name: string; selected: boolean }[]
}

export enum LecturerType {
  EXPECTED,
  UNEXPECTED,
}
