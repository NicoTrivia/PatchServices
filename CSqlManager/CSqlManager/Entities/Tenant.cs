﻿using System.Text.Json;
namespace CSqlManager;

public class Tenant
{
    public enum Levels
    {
        Silver,Gold,Platine // and so on ..
    }
    
    public string code { get; set; }
    public string name { get; set; }
    
    public string email { get; set; }

    public string level { get; set; }
    
    public DateTime?  creation_date { get; set; }
    public DateTime?  expiration_date { get; set; }
    
    public bool active  { get; set; }

    public override string ToString()
    {
        return JsonSerializer.Serialize(this);
    }
}