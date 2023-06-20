﻿namespace CSqlManager;

public class Ticket
{
    public int id { get; set; }
    
    public string tenant { get; set; }
    
    public Tenant.Levels user_level { get; set; }
    public int user_id { get; set; }
    
    public string date { get; set; }
    public string filename { get; set; }
    public int file_size { get; set; }
    
    public string brand_code { get; set; }
    public string ecu_code { get; set; }
    public string brand_name { get; set; }
    
    public bool dpf { get; set; }
    public bool egr { get; set; }
    public bool lambda { get; set; }
    public bool hotstart { get; set; }
    public bool flap { get; set; }
    public bool adblue { get; set; }
    public bool dtc { get; set; }
    public bool torqmonitor { get; set; }
    public bool speedlimit { get; set; }
    public bool startstop { get; set; }
    public bool nox { get; set; }
    public bool tva { get; set; }
    public bool readiness { get; set; }
    public bool immo { get; set; }
    public bool maf { get; set; }
    public bool hardcut { get; set; }
    public bool displaycalibration { get; set; }
    public bool waterpump { get; set; }
    public bool tprot { get; set; }
    public bool o2 { get; set; }
    public bool glowplugs { get; set; }
    public bool y75 { get; set; }
    public bool special { get; set; }
    public bool decata { get; set; }
    public bool vmax { get; set; }
    public bool stage1 { get; set; }
    public bool stage2 { get; set; }
    public bool flexfuel { get; set; }
}