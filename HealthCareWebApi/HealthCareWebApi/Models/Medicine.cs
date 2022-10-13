namespace HealthCareWebApi.Models
{
    public class Medicine
    {
        public int MedicineId { get; set; }
        public string? MedicineName { get; set; }
        public string? Category { get; set; }

        public string? ExpiryPeriod { get; set; }

        public string? Description { get; set; }

        public int Price { get; set; }

        public string? PhotoFileName { get; set; }
    }
}
