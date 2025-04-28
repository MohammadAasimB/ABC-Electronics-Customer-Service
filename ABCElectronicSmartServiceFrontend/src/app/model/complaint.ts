export class Complaint {
  constructor(
    public complaintId: number,
    public productModelNumber: string,
    public complaintName: string,
    public status: string,
    public clientId: string,
    public engineerId: number,
    public dateOfComplaint: Date,
    public resolvedDate: Date,
    public priority: number
  ) {}
}
